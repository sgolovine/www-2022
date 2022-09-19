import create from "zustand"

type Store = {
  menuOpen: boolean
  openMenu: () => void
  closeMenu: () => void
}

const useLayoutStore = create<Store>(set => {
  const openMenu = () => {
    set(prevState => ({
      ...prevState,
      menuOpen: true,
    }))
  }
  const closeMenu = () => {
    set(prevState => ({
      ...prevState,
      menuOpen: false,
    }))
  }
  return {
    menuOpen: false,
    openMenu,
    closeMenu,
  }
})

export default useLayoutStore
