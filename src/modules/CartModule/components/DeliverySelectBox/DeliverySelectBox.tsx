import React from 'react';
import './DeliverySelectBox.styles.scss';
import Select from 'react-select'
import { useCart } from '../../context/CartProvider';
import { useForm, Controller } from "react-hook-form";
import { TextArea } from '../../constructor';

interface FormValues {
    Date: string
    messagee: string;
  }

const DeliverySelectBox = () => {
    const {DeliveryData} = useCart()
    const { register, handleSubmit, control, formState: { errors } } = useForm<FormValues>();

    const onSubmit = (data: FormValues) => {
        console.log(data);
      };

    return (
        <div className='DeliverySelectBox'>
            {/* <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                    name="Date"
                    control={control}
                    rules={{ required: true }} // set the validation rule for the input
                    render={({ field }) => (
                    <Select
                        placeholder="מ שעה"
                        isClearable
                        {...field}
                        options={DeliveryData}
                    />
                    )}
                />

                <TextArea
                    name="messagee"
                    placeholder="Type your message here..."
                    onChange={(event) => register('messagee', { value: event.target.value })}
                />
                {errors.messagee && <span>{errors.messagee.message}</span>}
                <button type="submit">Submit</button>
            </form> */}

        </div>
    );
};

export default DeliverySelectBox;