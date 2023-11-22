import { FC } from "react";
import { Text, TextInput, View } from "react-native";
import cn from 'clsx';
import { IField } from "./field.interface";
import { Controller } from "react-hook-form";

const Field = <T extends Record<string, any>>({
  control, 
  rules,
  name,
  ...rest
}: IField<T>):JSX.Element => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ 
        field: {value, onChange, onBlur}, 
        fieldState: {error} 
      }) => (
          <>
            <View 
              className={cn(
                'bg-[#232323] w-full border rounded-lg pb-4 pt-2.5 px-4 my-1.5',
                error ? 'border-red' : 'border-transparent'
              )}
            >
              <TextInput
                autoCapitalize={'none'}
                className='text-white text-base'
                value={(value || '').toString()} 
                onBlur={onBlur}
                onChangeText={onChange}
                {...rest}   
              />
            </View>
            {error && <Text className='text-red'>{error.message}</Text>}
          </>
        )
      }
    />
  )          
}

export default Field