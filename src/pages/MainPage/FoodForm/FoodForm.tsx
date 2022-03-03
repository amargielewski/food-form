import NumberFormat from "react-number-format";
import { useFoodFormLogic } from "./useFoodFormLogic";

//components
import {
  Typography,
  NumericInput,
  Button,
  RangeInput,
  Input,
  Select,
  Label,
} from "components";

//styled
import {
  DataList,
  DataListOption,
  StyledForm,
  StyledWrapper,
} from "./FoodForm.styled";

const DISHES = ["pizza", "soup", "sandwich"];

const DATALIST = Array.from({ length: 10 }, (_, i) => i + 1);

export const FoodForm = () => {
  const {
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
  } = useFoodFormLogic();

  return (
    <StyledWrapper>
      <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
        <Label error={errors.dish_name} text="dish name">
          <Input
            type="text"
            placeholder="Dish name..."
            error={!!errors.dish_name}
            {...register("dish_name")}
          />
        </Label>

        <Label error={errors.preparation_time} text="preparation time">
          <NumberFormat
            placeholder="hh:mm:ss"
            customInput={Input}
            format={isTimeValid}
            error={!!errors.preparation_time}
            {...preparationTimeField}
          />
        </Label>
        <Label error={errors.dish_type} text="dish type">
          <Select
            error={!!errors.dish_type}
            options={DISHES}
            placeholder="pick items..."
            {...selectField}
          />
        </Label>

        {getValues("dish_type") === "pizza" && (
          <>
            <Label error={errors.number_of_slices} text="number of slices">
              <NumericInput
                onIncrement={() => handleIncrement("number_of_slices")}
                onDecrement={() => handleDecrement("number_of_slices")}
                min={1}
                error={!!errors.number_of_slices}
                placeholder={"Number of slices..."}
                {...register("number_of_slices", { valueAsNumber: true })}
              />
            </Label>
            <Label error={errors.diameter} text="diameter">
              <NumericInput
                min={0.1}
                error={!!errors.diameter}
                onIncrement={() => handleIncrement("diameter", 0.1)}
                onDecrement={() => handleDecrement("diameter", 0.1)}
                {...register("diameter", { valueAsNumber: true })}
                placeholder={"Diameter..."}
              />
            </Label>
          </>
        )}
        {getValues("dish_type") === "soup" && (
          <Label error={errors.spiciness_scale} text="spiciness scale">
            <RangeInput
              min={1}
              max={10}
              defaultValue={1}
              list="spiciness"
              {...register("spiciness_scale", { valueAsNumber: true })}
            />
            <DataList id="spiciness">
              {DATALIST.map((value) => (
                <DataListOption key={value} value={value}>
                  {value}
                </DataListOption>
              ))}
            </DataList>
          </Label>
        )}
        {getValues("dish_type") === "sandwich" && (
          <Label error={errors.slices_of_bread} text="slices of bread">
            <NumericInput
              placeholder="Slices of bread..."
              error={!!errors.slices_of_bread}
              onIncrement={() => handleIncrement("slices_of_bread")}
              onDecrement={() => handleDecrement("slices_of_bread")}
              {...register("slices_of_bread", { valueAsNumber: true })}
            />
          </Label>
        )}
        <Button type="submit" disabled={loading}>
          <Typography
            fontSize="l"
            fontWeight="semiBold"
            as="p"
            textTransform="uppercase"
          >
            add dish
          </Typography>
        </Button>
      </StyledForm>
    </StyledWrapper>
  );
};
