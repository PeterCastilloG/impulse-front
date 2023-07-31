"use client";
import { useForm } from "react-hook-form";
import {
  IChallenge,
  IConfigureContentPage,
} from "./interfaces/configure.interfaces";
import { useState } from "react";
import { challengeOrder, validateCupon } from "./services/configure.services";
import { UserAuth } from "@/shared/interfaces/auth";
import { clsx } from "@/shared/lib/clsx";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Range from "./components/range/Range";
import styles from "./Configure.module.scss";
import Types from "./components/challengeTypes/ChallengeTypes";
import ChallengeModalities from "./components/challengeModalities/ChallengeModalities";
import Image from "next/image";
import imputBorderImg from "@/assets/input-border.png";
import React from "react";
import Requirements from "./components/requirements/Requirements";
import Cupon from "./components/cupon/Cupon";
import "react-toastify/dist/ReactToastify.css";

export default function ConfigurePage({
  configurePage,
  userAuth,
}: {
  configurePage: IConfigureContentPage;
  userAuth: UserAuth;
}) {
  const {
    title,
    buyChallengeBtn,
    typeProducts,
    modalities,
    challenges,
    cuponInput,
    term_conditions,
  } = configurePage;

  const router = useRouter();
  const [challenge, setChallenge] = useState(challenges.items[0]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { isValid },
  } = useForm();

  const [loading, setLoading] = useState(false);

  function handleChangeChallenge({
    challenge,
    typeProductId,
    typeModalityId,
  }: {
    challenge?: IChallenge;
    typeProductId?: number;
    typeModalityId?: number;
  }) {
    let newChallenge = challenge;
    if (typeProductId) {
      newChallenge = challenges.items.find(
        (item) => item.typeProductId === typeProductId
      );
    } else if (typeModalityId) {
      newChallenge = challenges.items.find(
        (item) => item.typeModalityId === typeModalityId
      );
    } else if (!newChallenge) {
      newChallenge = challenges.items[0];
    }
    setChallenge(newChallenge ?? challenges.items[0]);
    setValue("challengeId", newChallenge?.challengeId);
  }

  async function handleValidateCupon(value: string): Promise<boolean> {
    const { success } = await validateCupon({
      ...userAuth,
      cupon: value,
    });
    return success;
  }

  async function handlePurchaseChallengeOrder(info: any) {
    info.challengeId = info.challengeId ?? challenge.challengeId;
    setLoading(true);
    const { success, data, kindMessage } = await challengeOrder({
      ...userAuth,
      ...info,
    });
    setLoading(false);
    if (success) {
      router.push("/challenge/invoice/" + data.item.challengeOrderId);
    } else {
      const message = kindMessage ?? "Ha ocurrido un error inseperado";
      toast.error(message);
    }
  }

  return (
    <form
      className={clsx(styles.container, loading && styles.ableBtns)}
      onSubmit={handleSubmit(handlePurchaseChallengeOrder)}
    >
      <span className={styles.title}>{title}</span>
      <Types
        label={typeProducts.label}
        types={typeProducts.items}
        typeProductSelected={challenge.typeProductId}
        onChange={handleChangeChallenge}
      />
      <ChallengeModalities
        label={modalities.label}
        handleChangeChallenge={handleChangeChallenge}
        modalitySelectedId={challenge.typeModalityId}
        modalities={modalities.items.filter(
          (item) => item.typeProductId === challenge.typeProductId
        )}
        challengeSelected={challenge}
      />
      <Range
        label={challenges.label}
        challenges={challenges.items.filter(
          (item) =>
            item.typeProductId === challenge.typeProductId &&
            item.typeModalityId === challenge.typeModalityId
        )}
        challengeSelected={challenge}
        onChange={handleChangeChallenge}
      />
      <div className={styles.amount}>
        <div className={styles.price}>
          <span>{challenge.amount.priceLabel}</span>
          <span>{challenge.amount.priceValue}</span>
          <Image src={imputBorderImg} alt="border" />
        </div>
        <Cupon
          cupon={cuponInput}
          register={register}
          handleValidateCupon={handleValidateCupon}
        />
      </div>
      <Requirements terms={term_conditions} register={register} />
      <button
        className={clsx(styles.button, !isValid && styles.notAllowed)}
        type="submit"
      >
        {buyChallengeBtn.value}
      </button>
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </form>
  );
}
