export default defineEventHandler(async () => {
  try {
    return await prisma.movie.findMany()
  }
  catch { throw InternalError('SOMETHING WENT WRONG') }
})
