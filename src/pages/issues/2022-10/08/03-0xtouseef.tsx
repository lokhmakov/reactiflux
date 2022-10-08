import * as React from 'react'
import {
  Control,
  FieldValues,
  useController,
  useForm,
  UseFormTrigger,
} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {z} from 'zod'

const schema = z.object({
  minimumBid: z.object({
    value1: z.string().refine(
      async (v) => {
        return v.length > 5
      },
      {
        message: `v.length > 5`,
      },
    ),
    value2: z.string(),
  }),
})

export default function App() {
  const resolver = zodResolver(schema)

  const {control, register, resetField, formState, trigger} = useForm({
    mode: `onChange`,
    criteriaMode: `all`,
    reValidateMode: 'onChange',
    resolver: async (values, ...args) => {
      if (values.minimumBid.value2 === `foo`) {
        return {
          errors: {},
          values,
        }
      }
      return resolver(values, ...args)
    },
  })

  return (
    <>
      <Input name="minimumBid.value1" control={control} defaultValue="value1" />
      <Input
        name="minimumBid.value2"
        control={control}
        defaultValue="value2"
        trigger={trigger}
        triggerList={[`minimumBid.value1`]}
      />
      <InputWithRef {...register(`fullName`)} />
      {JSON.stringify(formState.errors)}
    </>
  )
}

function Input(props: {
  name: string
  control: Control<FieldValues, any>
  defaultValue: any
  triggerList?: string[]
  trigger?: UseFormTrigger<FieldValues>
}) {
  const {field} = useController({
    name: props.name,
    control: props.control,
    defaultValue: props.defaultValue,
  })

  React.useEffect(() => {
    if (props.triggerList) {
      props.trigger?.(props.triggerList)
    }
  }, [field.value])

  return <input {...field} />
}

const InputWithRef = React.forwardRef<HTMLInputElement, {active?: boolean}>(
  (props, ref) => {
    return <input ref={ref} {...props} />
  },
)
