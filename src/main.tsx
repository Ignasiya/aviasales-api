import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Online, Offline } from 'react-detect-offline'
import TicketLayout from '@/layouts/TicketLayout/'
import WarningOffline from '@/components/WarningOffline'
import './styles/main.scss'

const rootElement = document.getElementById('root')

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Online>
        <TicketLayout />
      </Online>
      <Offline>
        <WarningOffline />
      </Offline>
    </StrictMode>
  )
} else {
  console.error('Failed to find root element with id "root"')
}
