import Scrollbar from 'react-smooth-scrollbar';
import '~assets/style/custom.css'

export default function ({ children, ...res }) {
    return (
        <Scrollbar
            plugins={{
                overscroll: {
                    effect: "bounce"
                }
            }}
            thumbMinSize={10}
            className="custom-scrollbar"
            {...res}
        >
            {children}
        </Scrollbar>
    )
}