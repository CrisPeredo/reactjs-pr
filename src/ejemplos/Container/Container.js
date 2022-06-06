import './Container.css'

const Container = ( {children} ) => {

    return (
        <div className="my-container">
            {children}
        </div>
    )
}

export default Container