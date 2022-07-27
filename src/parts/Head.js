const Head = () => {

    const stu = {
        cont: {
            height: '60px',
            position: 'fixed',
            top: '0',
            right: '0',
            left: '0',
            backgroundColor: 'white',
            display: 'flex',
            alignItems: 'center'
        },
        logo: {
            height: '90%',
            marginLeft: '2rem'
        }
    }

    return (
        <div style={stu.cont}>
            <img style={stu.logo} src="/image/metalogo.png" alt="logo" />
        </div>
    )
}

export default Head