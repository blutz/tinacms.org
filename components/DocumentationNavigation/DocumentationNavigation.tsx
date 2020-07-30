import { useState } from 'react'
import { Overlay } from '../ui/Overlay'
import { DocsNav } from './DocsNav'
import { NavToggle } from '../ui/NavToggle'
import styled from 'styled-components'
import { DocsHeaderNav } from './DocsHeaderNav'
import { TinaIcon } from 'components/logo/TinaIcon'

interface Props {
  navItems: any
}

export function DocumentationNavigation({ navItems }: Props) {
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false)
  return (
    <>
      <MobileNavToggle
        open={mobileNavIsOpen}
        onClick={() => setMobileNavIsOpen(!mobileNavIsOpen)}
      />
      <DocsMobileTinaIcon docs />
      <DocsNav open={mobileNavIsOpen} navItems={navItems} />
      <Overlay
        open={mobileNavIsOpen}
        onClick={() => setMobileNavIsOpen(false)}
      />
      <DocsHeaderNav color={'light'} open={mobileNavIsOpen} />
    </>
  )
}

const MobileNavToggle = styled(NavToggle)`
  position: fixed;
  margin-top: 1.25rem;
  left: 1rem;
  z-index: 500;

  @media (min-width: 999px) {
    display: none;
  }
`

const DocsMobileTinaIcon = styled(TinaIcon)`
  position: relative;
  display: block;
  padding: 1rem 0;

  h1 {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 1000px) {
    display: none;
  }
`