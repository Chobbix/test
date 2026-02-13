export default {


    theme: {
        extend: {
            keyframes: {
                moveDown: {
                    '0%' {
                        opacity: '0',
                        transform: 'translateY(0)'
                    }

                    '50%' {
                        opacity: '1',
                        transform: 'translateY(50vh)'
                    }

                    '100%' {
                        opacity: '0',
                        transform: 'translateY(95vh)'
                    }
                },
            },
            animation: {
                moveDown: 'moveDown 5s linear infinite'
            },
        },
    },
}