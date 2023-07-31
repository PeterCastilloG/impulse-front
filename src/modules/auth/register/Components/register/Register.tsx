import Link from "next/link";
import styles from "./Register.module.scss";
import { useForm } from "react-hook-form";
import { ICountry, IRegister } from "../../interfaces/register.interfaces";
import { BsApple, BsFacebook } from "react-icons/bs";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaDotCircle } from "react-icons/fa";
import { clsx } from "@/shared/lib/clsx";

export default function Register({
  handleUserRegister,
  countries,
}: {
  handleUserRegister: (userinfo: IRegister) => Promise<void>;
  countries: ICountry[];
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      identification: "",
      email: "",
      country: "",
      city: "",
      address: "",
      mobile: "",
      sex: "",
      sponsorCode: "",
    },
  });

  const handleRegister = async (userInfo: {
    firstName: string;
    lastName: string;
    identification: string;
    email: string;
    country: string;
    city: string;
    address: string;
    mobile: string;
    sex: string;
    sponsorCode: string;
  }) => {
    if (!isValid) {
      return;
    }
    const request = {
      ...userInfo,
      address: userInfo.country,
      sex: Number(userInfo.sex),
      country: userInfo.country.slice(0, 2).toUpperCase(),
    };
    await handleUserRegister(request);
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleRegister)}>
      <span className={styles.title}>RÉGISTRATE CON</span>
      <div className={styles.links}>
        <span>
          <BsFacebook />
        </span>
        <span>
          <BsApple />
        </span>
        <span>
          <AiOutlineGoogle />
        </span>
      </div>
      <span className={styles.other}>
        <FaDotCircle />
      </span>
      <div className={styles.input_group}>
        <div className={styles.field}>
          <span>Nombre</span>
          <input
            type="text"
            placeholder="Ingresa tu(s) nombre(s)"
            {...register("firstName", {
              required: {
                value: true,
                message: "Campo requerido",
              },
            })}
          />
        </div>
        <div className={styles.field}>
          <span>Apellidos(s)</span>
          <input
            type="text"
            placeholder="Ingresa tu(s) apellidos(s)"
            {...register("lastName", {
              required: {
                value: true,
                message: "Campo requerido",
              },
            })}
          />
        </div>
      </div>
      <div className={styles.input_group}>
        <div className={styles.field}>
          <span>Sexo</span>
          <select
            {...register("sex", {
              required: {
                value: true,
                message: "Campo requerido",
              },
            })}
          >
            <option value={""} hidden>
              Selecionar
            </option>
            <option value={"0"}>Femenino</option>
            <option value={"1"}>Masculino</option>
          </select>
        </div>
        <div className={styles.field}>
          <span>DNI</span>
          <input
            type="text"
            placeholder="Ingrese su número de DNI"
            {...register("identification", {
              required: {
                value: true,
                message: "Campo requerido",
              },
            })}
          />
        </div>
      </div>
      <div className={styles.input_group}>
        <div className={styles.field}>
          <span>Email</span>
          <input
            type="text"
            placeholder="Ingrese tu correo electronico"
            {...register("email", {
              required: {
                value: true,
                message: "Campo requerido",
              },
            })}
          />
        </div>
        <div className={styles.field}>
          <span>Telefono</span>
          <input
            type="text"
            placeholder="Ingresa tu contraseña"
            {...register("mobile", {
              required: {
                value: true,
                message: "Campo requerido",
              },
            })}
          />
        </div>
      </div>
      <div className={styles.input_group}>
        <div className={styles.field}>
          <span>Pais</span>
          <select
            {...register("country", {
              required: {
                value: true,
                message: "Campo requerido",
              },
            })}
          >
            <option value="" hidden>
              Seleccionar
            </option>
            {countries.map((item) => (
              <option key={item.countryId} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.field}>
          <span>Ciudad</span>
          <input
            type="text"
            placeholder="Ingresa tu ciudad"
            {...register("city", {
              required: {
                value: true,
                message: "Campo requerido",
              },
            })}
          />
        </div>
      </div>
      <button
        type="submit"
        className={clsx(styles.btn, isValid && styles.able)}
      >
        Registrarme
      </button>
      <div className={styles.extra}>
        <span>¿Ya tienes cuenta?</span>
        <Link href={"/r/login"}>Inicia tu sesión</Link>
      </div>
    </form>
  );
}
