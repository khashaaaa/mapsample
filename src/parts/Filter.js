const Filter = () => {

    return (
        <div className="filter">
            <div className="check">
                <div className="sect sold">
                    <label>Зарагдсан газар</label>
                    <div className="choice">
                        <div className="one"></div>
                        <input type="checkbox" />
                    </div>
                </div>
                <div className="sect available">
                    <label>Зарагдаагүй газар</label>
                    <div className="choice">
                        <div className="two"></div>
                        <input type="checkbox" />
                    </div>
                </div>
                <div className="sect unavailable">
                    <label>Зарагдахгүй газар</label>
                    <div className="choice">
                        <div className="three"></div>
                        <input type="checkbox" />
                    </div>
                </div>
            </div>

            <div className="search">
                <input />
                <button type="button">Хайх</button>
            </div>
        </div>
    )
}

export default Filter