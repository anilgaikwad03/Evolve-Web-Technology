tailwind.config = {
    theme:{
        extend:{
            gridTemplateColumns:{
                'auto':'repeat(auto-fit, minmax(200px, 1fr))'
            },
            fontFamily:{
                Raleway:["Raleway", "sans-serif"],
                Ovo:["Ovo", "serif"],
                cursive:["Montez", "cursive"],
                sans: ['Graphik', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
                bebas:["Bebas Neue", "serif"]
            },
            colors:{
                lightHover:'#fcf4ff',
                darkHover:'#2a004a',
                darkTheme:'#11001F'
            },
            boxShadow:{
                'black':'4px 4px 0 #000',
                'white':'4px 4px 0 #fff',
            }
        }
    },
    
    darkMode:'selector'
}