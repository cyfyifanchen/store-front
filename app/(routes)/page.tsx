import getImages from '@/actions/get-billboard'
import Container from '@/components/ui/container'

export const revalidate = 0

const HomePage = async () => {
  const images = await Promise.all([
    getImages('920ac9a4-425b-401e-b58d-71250bc30275'),
    getImages('c28fc45a-9ec8-4f45-856a-dd29880c19e7'),
    getImages('55aa63b4-e9cf-4a98-b92d-70ee6c0fa99a'),
    getImages('52187b4a-60c0-4676-bed0-266c6b59a751'),
  ])

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8"></div>
      </div>
    </Container>
  )
}

export default HomePage
