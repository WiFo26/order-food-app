import { Header } from '../UI/Header'
export const Layout = ({ children, toggleModal }) => {
  return (
    <>
      <div className='h-screen bg-zinc-700'>
        <Header toggleModal={toggleModal} />
        <main className='absolute top-20 grid w-full place-items-center gap-6'>
          {children}
        </main>
      </div>
    </>
  )
}
