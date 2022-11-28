import {z} from 'zod'

const schema = z.object({
  minimumBid: z.object({
    value: z
      .string()
      .transform((val) => val.length)
      .refine(
        async (val) => {
          return val > 5
        },
        {message: `length can's be less than 5`},
      ),
  }),
})

async function main() {
  console.log(await schema.safeParseAsync({minimumBid: {value: `123456`}}))
  console.log(await schema.safeParseAsync({minimumBid: {value: `12345`}}))
}

main()
