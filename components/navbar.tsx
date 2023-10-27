import Link from 'next/link'

import MainNav from '@/components/main-nav'
import Container from '@/components/ui/container'
import NavbarActions from '@/components/navbar-actions'
import getCategories from '@/actions/get-categories'

const Navbar = async () => {
  const categories = await getCategories()

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link
            href="/product/207305fe-60c3-4e5c-9207-6af84c09f439"
            className="ml-4 flex lg:ml-0 gap-x-2"
          ></Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  )
}

export default Navbar
