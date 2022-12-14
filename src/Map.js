import { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'
import './style/map.css'

import { Pagination } from 'swiper'
import Head from './parts/Head'
import Filter from './parts/Filter'

function Map() {

    const [open, setOpen] = useState(false)
    const [cellinfo, setCellinfo] = useState('')
    const [zoom, setZoom] = useState(10)

    var arr = []
    var grid = 76 * 76

    for(var x = 1; x <= grid; x++) {

        if (
            x === 113 ||
            x === 114 ||
            x === 115 ||
            x === 116 ||

            x === 189 ||
            x === 190 ||
            x === 191 ||
            x === 192 ||

            x === 264 ||
            x === 265 ||
            x === 266 ||
            x === 267 ||
            x === 268 ||
            x === 269 ||

            x === 338 ||
            x === 339 ||
            x === 340 ||
            x === 341 ||
            x === 342 ||
            x === 343 ||
            x === 344 ||
            x === 345 ||
            x === 346 ||
            x === 347 ||

            x === 414 ||
            x === 415 ||
            x === 416 ||
            x === 417 ||
            x === 418 ||
            x === 419 ||
            x === 420 ||
            x === 421 ||
            x === 422 ||
            x === 423 ||

            x === 489 ||
            x === 490 ||
            x === 491 ||
            x === 492 ||
            x === 493 ||
            x === 494 ||
            x === 495 ||
            x === 496 ||
            x === 497 ||
            x === 498 ||
            x === 499 ||
            x === 500 ||

            x === 563 ||
            x === 564 ||
            x === 565 ||
            x === 566 ||
            x === 567 ||
            x === 568 ||
            x === 573 ||
            x === 574 ||
            x === 575 ||
            x === 576 ||
            x === 577 ||
            x === 578 ||

            x === 639 ||
            x === 640 ||
            x === 641 ||
            x === 642 ||
            x === 643 ||
            x === 644 ||
            x === 649 ||
            x === 650 ||
            x === 651 ||
            x === 652 ||
            x === 653 ||
            x === 654 ||

            x === 715 ||
            x === 716 ||
            x === 717 ||
            x === 718 ||
            x === 719 ||
            x === 720 ||
            x === 725 ||
            x === 726 ||
            x === 727 ||
            x === 728 ||
            x === 729 ||
            x === 730 ||

            x === 791 ||
            x === 792 ||
            x === 793 ||
            x === 794 ||
            x === 795 ||
            x === 796 ||
            x === 801 ||
            x === 802 ||
            x === 803 ||
            x === 804 ||
            x === 805 ||
            x === 806 ||

            x === 869 ||
            x === 870 ||
            x === 871 ||
            x === 872 ||
            x === 873 ||
            x === 874 ||
            x === 875 ||
            x === 876 ||
            x === 877 ||
            x === 878 ||
            x === 879 ||
            x === 880 ||

            x === 946 ||
            x === 947 ||
            x === 948 ||
            x === 949 ||
            x === 950 ||
            x === 951 ||
            x === 952 ||
            x === 953 ||
            x === 954 ||
            x === 955 ||

            x === 1022 ||
            x === 1023 ||
            x === 1024 ||
            x === 1025 ||
            x === 1026 ||
            x === 1027 ||
            x === 1028 ||
            x === 1029 ||
            x === 1030 ||
            x === 1031 ||

            x === 1100 ||
            x === 1101 ||
            x === 1102 ||
            x === 1103 ||
            x === 1104 ||
            x === 1105 ||

            x === 1177 ||
            x === 1178 ||
            x === 1179 ||
            x === 1180
        ) {
            arr.push({ item: x, diff: 'part' })
        }
        else if(
            x === 923 ||
            x === 924 ||
            x === 925 ||
            x === 926 ||
            x === 927 ||
            x === 929 ||
            x === 930 ||
            x === 931 ||

            x === 999 || 
            x === 1000 ||
            x === 1001 ||
            x === 1002 ||
            x === 1003 ||
            x === 1005 ||
            x === 1006 ||
            x === 1007 ||

            x === 1075 || 
            x === 1076 ||
            x === 1077 ||
            x === 1078 ||
            x === 1079 ||
            x === 1080 ||
            x === 1081 ||
            x === 1082 ||
            x === 1083 ||

            x === 1151 ||
            x === 1152 ||
            x === 1153 ||
            x === 1156 ||
            x === 1157 ||
            x === 1158 ||

            x === 1227 ||
            x === 1228 ||
            x === 1229 ||

            x === 1305 ||
            x === 1306 ||

            x === 1379 ||
            x === 1380 ||
            x === 1381 ||
            x === 1382 ||

            x === 1455 ||
            x === 1456 ||
            x === 1457 ||
            x === 1458 ||

            x === 1531 ||
            x === 1532 ||
            x === 1533
        ) {
            arr.push({ item: x, diff: 'part' })
        }
        else if (
            x === 970 ||
            x === 971 ||
            x === 972 ||
            x === 974 ||
            x === 975 ||
            x === 976 ||
            x === 977 ||
            x === 978 ||

            x === 1046 ||
            x === 1047 ||
            x === 1048 ||
            x === 1050 ||
            x === 1051 ||
            x === 1052 ||
            x === 1053 ||
            x === 1054 ||

            x === 1122 ||
            x === 1123 ||
            x === 1124 ||
            x === 1125 ||
            x === 1126 ||
            x === 1127 ||
            x === 1128 ||
            x === 1129 ||
            x === 1130 ||

            x === 1199 ||
            x === 1200 ||
            x === 1201 ||
            x === 1204 ||
            x === 1205 ||
            x === 1206 ||

            x === 1280 ||
            x === 1281 ||
            x === 1282 ||

            x === 1355 ||
            x === 1356 ||

            x === 1431 ||
            x === 1432 ||
            x === 1433 ||
            x === 1434 ||

            x === 1507 ||
            x === 1508 ||
            x === 1509 ||
            x === 1510 ||

            x === 1584 ||
            x === 1585 ||
            x === 1586
        ) {
            arr.push({ item: x, diff: 'part' })
        }
        else if(
            x === 4495 ||
            x === 4496 ||
            x === 4497 ||

            x === 4571 ||
            x === 4572 ||
            x === 4573 ||
            x === 4574 ||

            x === 4647 ||
            x === 4648 ||
            x === 4649 ||
            x === 4650 ||

            x === 4725 ||
            x === 4726 ||

            x === 4799 ||
            x === 4800 ||
            x === 4801 ||

            x === 4875 ||
            x === 4876 ||
            x === 4877 ||
            x === 4880 ||
            x === 4881 ||
            x === 4882 ||

            x === 4951 ||
            x === 4952 ||
            x === 4953 ||
            x === 4954 ||
            x === 4955 ||
            x === 4956 ||
            x === 4957 ||
            x === 4958 ||
            x === 4959 ||

            x === 5027 ||
            x === 5028 ||
            x === 5029 ||
            x === 5030 ||
            x === 5031 ||
            x === 5033 ||
            x === 5034 ||
            x === 5035 ||

            x === 5103 ||
            x === 5104 ||
            x === 5105 ||
            x === 5106 ||
            x === 5107 ||
            x === 5109 ||
            x === 5110 ||
            x === 5111
        )
        {
            arr.push({ item: x, diff: 'part' })
        }
        else if(
            x === 4548 ||
            x === 4549 ||
            x === 4550 ||

            x === 4623 ||
            x === 4624 ||
            x === 4625 ||
            x === 4626 ||

            x === 4699 ||
            x === 4700 ||
            x === 4701 ||
            x === 4702 ||

            x === 4775 ||
            x === 4776 ||

            x === 4852 ||
            x === 4853 ||
            x === 4854 ||

            x === 4923 ||
            x === 4924 ||
            x === 4925 ||
            x === 4928 ||
            x === 4929 ||
            x === 4930 ||

            x === 4998 ||
            x === 4999 ||
            x === 5000 ||
            x === 5001 ||
            x === 5002 ||
            x === 5003 ||
            x === 5004 ||
            x === 5005 ||
            x === 5006 ||

            x === 5074 ||
            x === 5075 ||
            x === 5076 ||
            x === 5078 ||
            x === 5079 ||
            x === 5080 ||
            x === 5081 ||
            x === 5082 ||

            x === 5150 ||
            x === 5151 ||
            x === 5152 ||
            x === 5154 ||
            x === 5155 ||
            x === 5156 ||
            x === 5157 ||
            x === 5158
        )
        {
            arr.push({ item: x, diff: 'part' })
        }
        else if (
            x === 4901 ||
            x === 4902 ||
            x === 4903 ||
            x === 4904 ||

            x === 4976 ||
            x === 4977 ||
            x === 4978 ||
            x === 4979 ||
            x === 4980 ||
            x === 4981 ||

            x === 5051 ||
            x === 5052 ||
            x === 5053 ||
            x === 5054 ||
            x === 5055 ||
            x === 5056 ||
            x === 5057 ||
            x === 5058 ||

            x === 5127 ||
            x === 5128 ||
            x === 5129 ||
            x === 5130 ||
            x === 5131 ||
            x === 5132 ||
            x === 5133 ||
            x === 5134 ||

            x === 5204 ||
            x === 5205 ||
            x === 5206 ||
            x === 5207 ||
            x === 5208 ||
            x === 5209 ||

            x === 5281 ||
            x === 5282 ||
            x === 5283 ||
            x === 5284
        ) {
            arr.push({ item: x, diff: 'part' })
        }
        else if (
            (x >= 1231 && x <= 1278) ||
            (x >= 1307 && x <= 1354) ||
            (x >= 1383 && x <= 1430) ||
            (x >= 1459 && x <= 1506) ||
            (x >= 1535 && x <= 1582) ||
            (x >= 1611 && x <= 1658) ||
            (x >= 1687 && x <= 1734) ||
            (x >= 1763 && x <= 1810) ||
            (x >= 1839 && x <= 1886) ||
            (x >= 1915 && x <= 1962) ||
            (x >= 1991 && x <= 2038) ||
            (x >= 2067 && x <= 2114) ||
            (x >= 1459 && x <= 1506) ||
            (x >= 2143 && x <= 2190) ||
            (x >= 2219 && x <= 2266) ||
            (x >= 2295 && x <= 2342) ||
            (x >= 2371 && x <= 2418) ||
            (x >= 2447 && x <= 2494) ||
            (x >= 2523 && x <= 2570) ||
            (x >= 2599 && x <= 2646) ||
            (x >= 2675 && x <= 2722) ||
            (x >= 2751 && x <= 2798) ||
            (x >= 2827 && x <= 2874) ||
            (x >= 2903 && x <= 2950) ||
            (x >= 2979 && x <= 3026) ||
            (x >= 3055 && x <= 3102) ||
            (x >= 3131 && x <= 3178) ||
            (x >= 3207 && x <= 3254) ||
            (x >= 3283 && x <= 3330) ||
            (x >= 3359 && x <= 3406) ||
            (x >= 3435 && x <= 3482) ||
            (x >= 3511 && x <= 3558) ||
            (x >= 3587 && x <= 3634) ||
            (x >= 3663 && x <= 3710) ||
            (x >= 3739 && x <= 3786) ||
            (x >= 3815 && x <= 3862) ||
            (x >= 3891 && x <= 3938) ||
            (x >= 3967 && x <= 4014) ||
            (x >= 4043 && x <= 4090) ||
            (x >= 4119 && x <= 4166) ||
            (x >= 4195 && x <= 4242) ||
            (x >= 4271 && x <= 4318) ||
            (x >= 4347 && x <= 4394) ||
            (x >= 4423 && x <= 4470) ||
            (x >= 4499 && x <= 4546) ||
            (x >= 4575 && x <= 4622) ||
            (x >= 4651 && x <= 4698) ||
            (x >= 4727 && x <= 4774) ||
            (x >= 4803 && x <= 4850)
        )
        {
            arr.push({ item: x, diff: 'main' })
        }
        else {
            arr.push({ item: x, diff: null })
        }
    }

    const ShowSideBar = (cell) => {
        setOpen(true)
        setCellinfo(cell)
    }

    const HideSideBar = () => {
        setOpen(false)
    }

    const ZoomIn = () => {
        if(zoom < 20) {
            setZoom(zoom + 2)
        }
    }

    const ZoomOut = () => {
        if(zoom > 2) {
            setZoom(zoom - 2)
        }
    }

    return (
        <>
            <Head />
            <Filter />
            <div className="zoom">
                <div>
                    <svg onClick={ZoomIn} version="1.1" id="Capa_1" x="0px" y="0px"
                        viewBox="0 0 52 52">
                    <g>
                        <path d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M26,50C12.767,50,2,39.233,2,26
                            S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z"/>
                        <path d="M38.5,25H27V14c0-0.553-0.448-1-1-1s-1,0.447-1,1v11H13.5c-0.552,0-1,0.447-1,1s0.448,1,1,1H25v12c0,0.553,0.448,1,1,1
                            s1-0.447,1-1V27h11.5c0.552,0,1-0.447,1-1S39.052,25,38.5,25z"/>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    </svg>

                    <p>{zoom * 10}</p>

                    <svg onClick={ZoomOut} version="1.1" id="Capa_1" x="0px" y="0px"
                        viewBox="0 0 52 52">
                    <g>
                        <path d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M26,50C12.767,50,2,39.233,2,26
                            S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z"/>
                        <path d="M39,25H13c-0.552,0-1,0.447-1,1s0.448,1,1,1h26c0.552,0,1-0.447,1-1S39.552,25,39,25z"/>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    </svg>
                </div>
            </div>
            <div className="cont">
                <div style={{ zoom: zoom / 10 }} className="tortoise">
                    {
                        arr.map((item, num) => {
                        return <div key={num}>
                            {
                            item.diff === null ? <div onClick={() => ShowSideBar(item.item)} className={`cell ${num}`}></div>
                            :
                            <div onClick={() => ShowSideBar(item.item)} className={item.diff === 'main' ? `cell ${num} main` : `cell ${num} part`}></div>
                            }
                        </div>
                        })
                    }
                </div>
            </div>
            <div className={open === true ? `sidebar slide-left` : `sidebar slide-right`}>
                <div className="close">
                    <img onClick={HideSideBar} src="/image/close.png" alt="Close" />
                </div>

                <div className="info">
                    <div className="image">
                        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                            <SwiperSlide><img src="/image/ard.jpg" alt="ard" /></SwiperSlide>
                            <SwiperSlide><img src="/image/ard.jpg" alt="ard" /></SwiperSlide>
                            <SwiperSlide><img src="/image/ard.jpg" alt="ard" /></SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="title">
                        <h1>?????? ???????????????????? ????????????</h1>
                    </div>
                    <div className="location">
                        {
                            cellinfo ?
                            <p>??????????????: {cellinfo}</p>
                            :
                            null
                        }
                    </div>
                </div>

                <button type="button">???????????????? ????????</button>
            </div>
        </>
    )
}

export default Map;
