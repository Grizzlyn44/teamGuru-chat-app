import Router from 'next/router'

const Home = () => {
    return (
    <div>
        <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            padding: '2rem'
        }}>
            <div onClick={() => Router.push("/messages")} style={{
                display: 'inline-block',
                padding: '1rem 3rem',
                color: '#151719',
                fontSize: '.8rem',
                fontWeight: 500,
                background: '#43a1fe',
                borderRadius: '.25rem',
                cursor: 'pointer',
            }}>
                Messages
            </div>
        </div>
        <div>Homepage...</div>
    </div>
    )
}

export default Home