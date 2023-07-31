"use client";
import { AiFillCheckCircle } from "react-icons/ai";
import styles from "./Profile.module.scss";
import { PiPencilSimpleDuotone } from "react-icons/pi";
import Select from "@/shared/components/select/Select";
import { IProfileContentPage } from "./interfaces/profile.interfaces";

export default function ProfilePage({
  profilePage,
}: {
  profilePage: IProfileContentPage;
}) {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{profilePage.title}</span>
      <form className={styles.form}>
        <div className={styles.content}>
          <div className={styles.fields}>
            {profilePage.fields.map((item) => (
              <div className={styles.field} key={item.id}>
                <label htmlFor={item.id}>{item.label}</label>
                <div>
                  {
                    {
                      INPUT: (
                        <input
                          disabled={item.disabled}
                          placeholder={item.placeholder}
                          type="text"
                          id={item.id}
                        />
                      ),
                      SELECT: (
                        <Select
                          disabled={item.disabled}
                          curretnValue={item.value}
                          onChange={() => {}}
                          options={[]}
                          placeholder="item.placeholder"
                          filter={true}
                        />
                      ),
                    }[item.type]
                  }
                  {item.disabled && <PiPencilSimpleDuotone />}
                </div>
              </div>
            ))}
            <div className={styles.profilestate}>
              <span className={styles.title}>
                {profilePage.verifiedState.label}
              </span>
              {
                {
                  1: (
                    <span className={styles.state}>
                      <AiFillCheckCircle />{" "}
                      <span>{profilePage.verifiedState.value}</span>
                    </span>
                  ),
                  2: (
                    <span className={styles.state}>
                      <AiFillCheckCircle />{" "}
                      <span>{profilePage.verifiedState.value}</span>
                    </span>
                  ),
                }[profilePage.verifiedState.state]
              }
            </div>
          </div>
        </div>
        <button className={styles.button}>{profilePage.button.value}</button>
      </form>
    </div>
  );
}
