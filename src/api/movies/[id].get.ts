import { useValidatedParams } from 'h3-zod'

export default defineEventHandler(async (event) => {
  const { id } = await useValidatedParams(event, { id: z.coerce.number() })

  const movie = await prisma.movie.findUnique({ where: { id } })

  if (!movie)
    throw NotFound('MOVIE NOT FOUND')

  return movie
})
