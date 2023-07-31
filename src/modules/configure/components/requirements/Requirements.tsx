import { FieldValues, UseFormRegister } from "react-hook-form";
import { Fragment } from "react";
import { ITerm } from "../../interfaces/configure.interfaces";
import React from "react";
import styles from "./Requirements.module.scss";

export default function Requirements({
  terms,
  register,
}: {
  terms: ITerm[];
  register: UseFormRegister<FieldValues>;
}) {
  return (
    <div className={styles.conditions}>
      {terms.map((item) => (
        <div key={item.id} className={styles.condition}>
          <input type="checkbox" id={item.id} {...register(item.name, {
            required: item.required
          })} />
          <label htmlFor={item.id}>
            {item.label.map((item, index) =>
              item.bold ? (
                <span key={index} style={{ fontWeight: 700, color: "#007CFF" }}>
                  {item.letter}
                </span>
              ) : (
                <Fragment key={index}>{item.letter} </Fragment>
              )
            )}
          </label>
        </div>
      ))}
    </div>
  );
}
