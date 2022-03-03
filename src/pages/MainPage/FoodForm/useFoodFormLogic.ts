import { useState } from "react";
import { useController, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

//api
import { dishesPOST, RequestData } from "api";

type FormValues = {
  dish_name: string;
  dish_type: string;
  number_of_slices: number;
  diameter: number;
  spiciness_scale: number;
  slices_of_bread: number;
  preparation_time: string;
};

const validation = Yup.object().shape({
  dish_name: Yup.string().required("Dish name is required"),
  preparation_time: Yup.string()
    .matches(/^\d+:\d{2}:\d{2}$/, "Invalid format")
    .required("Preperation Time is required"),
  dish_type: Yup.string().required("Dish Type is required"),
  number_of_slices: Yup.number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .nullable()
    .when("dish_type", (dish_type, schema) => {
      return dish_type === "pizza"
        ? schema
            .min(1, "Amount must be larger than 0")
            .required("Slice Number is required")
        : schema;
    }),
  diameter: Yup.number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .nullable()
    .when("dish_type", (dish_type, schema) => {
      return dish_type === "pizza"
        ? schema
            .min(0.1, "Amount must be larger than 0")
            .required("Diameter Number is required")
        : schema;
    }),
  slices_of_bread: Yup.number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .nullable()
    .when("dish_type", (dish_type, schema) => {
      return dish_type === "sandwich"
        ? schema
            .min(1, "Amount must be larger than 0")
            .required("Slices of bread is required")
        : schema;
    }),
});

const submitSuccessNotification = () =>
  toast.success("Form submitted successfully", {});
const submitErrorNotification = (err: string) => toast.error(err, {});

export const useFoodFormLogic = () => {
  const {
    register,
    handleSubmit,
    control,
    getValues,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(validation),
  });

  const [loading, setLoading] = useState(false);

  const resetFields = () => {
    reset({
      dish_name: "",
      dish_type: "",
      number_of_slices: undefined,
      diameter: undefined,
      spiciness_scale: 1,
      slices_of_bread: undefined,
      preparation_time: "",
    });
  };

  const onSubmit = (data: FormValues) => {
    setLoading(true);
    let requestData;

    if (data.dish_type === "pizza")
      requestData = {
        name: data.dish_name,
        preparation_time: data.preparation_time,
        type: "pizza",
        diameter: data.diameter,
        no_of_slices: data.number_of_slices,
      };
    if (data.dish_type === "soup")
      requestData = {
        name: data.dish_name,
        preparation_time: data.preparation_time,
        type: "soup",
        spiciness_scale: data.spiciness_scale,
      };
    if (data.dish_type === "sandwich")
      requestData = {
        name: data.dish_name,
        preparation_time: data.preparation_time,
        type: "sandwich",
        slices_of_bread: data.slices_of_bread,
      };
    dishesPOST(requestData as RequestData)
      .then(() => {
        submitSuccessNotification();
      })
      .catch((err) => {
        submitErrorNotification(err.message);
      })
      .finally(() => {
        setLoading(false);
        resetFields();
      });
  };

  const { field: selectField } = useController({
    name: "dish_type",
    control,
  });

  const { field: preparationTimeField } = useController({
    name: "preparation_time",
    control,
  });

  const handleIncrement = (fieldName: keyof FormValues, by: number = 1) => {
    setValue(
      fieldName,
      +(isNaN(+getValues(fieldName)) ? 0 : +getValues(fieldName) + by).toFixed(
        1
      )
    );
  };

  const handleDecrement = (fieldName: keyof FormValues, by: number = 1) => {
    if (+getValues(fieldName) > 0)
      setValue(
        fieldName,
        +(
          isNaN(+getValues(fieldName)) ? 0 : +getValues(fieldName) - by
        ).toFixed(1)
      );
  };

  const numberLimit = (val: string, max: string) => {
    if (val.length === 1 && val[0] > max[0]) {
      val = "0" + val;
    }

    if (val.length === 2) {
      if (val > max) {
        val = max;
      }
    }

    return val;
  };

  const isTimeValid = (val: string) => {
    const hours = numberLimit(val.substring(0, 2), "99");
    const minutes = numberLimit(val.substring(2, 4), "59");
    const seconds = numberLimit(val.substring(4, 6), "59");

    return (
      hours +
      (minutes.length ? ":" + minutes : "") +
      (seconds.length ? ":" + seconds : "")
    );
  };

  return {
    register,
    handleSubmit,
    errors,
    isTimeValid,
    handleIncrement,
    handleDecrement,
    onSubmit,
    selectField,
    preparationTimeField,
    getValues,
    loading,
  };
};
