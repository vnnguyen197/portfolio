import { useTheme } from 'next-themes'

export const ThemeChanger = () => {
    const { theme, setTheme } = useTheme()

    return (
        <>
            {theme === 'light' ? (
                <div className='font-semibold cursor-pointer md:text-[12px] sm:text-[10px]' onClick={() => setTheme('dark')}>Dark Mode</div>
            ) : (
                <div className='font-semibold cursor-pointer md:text-[12px] sm:text-[10px]' onClick={() => setTheme('light')}>Light Mode</div>
            )}
        </>
    )
}