import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'

import { Control, FieldPath } from 'react-hook-form'
import { z } from 'zod'
import { authFormSchema } from '@/lib/utils'

interface  CustomInput {
    control: Control<z.infer<typeof authFormSchema>>, 
    name: FieldPath<z.infer<typeof authFormSchema>>,
    label: string,
    placeholder: string,
}

const CustomInput = ({ control, name, label, placeholder }: CustomInput ) => {
  return (
            <FormField
              control={control}
              name={name}
              render={({ field }) => (
               <div className='form-item'>
                <FormItem>
                  <FormLabel className='form-label'>
                    {label}
                  </FormLabel>
                  {/* <div className='flex w-full flex-col'></div> */}
                  <FormControl>
                    <Input 
                    placeholder={placeholder}
                    className='input-class'
                    type='password'
                     {...field} 
                     />
                  </FormControl>
                  <FormMessage 
                  className='form-message mt-2' />
                </FormItem>
                </div>
              )}
            />

  )
}

export default CustomInput