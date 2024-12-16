import React, { useState } from "react";
import Protocol from "../../../_basic/Protocol/Protocol";
import TWimg from "../images/taiwan.png";
import "../styles/Service.css";

export default function ServerContent({ ServerData }) {
    // 確保 ServerData 存在並且有正確的結構
    const { serviceData } = ServerData || {};
    const [selectedRegionId, setSelectedRegionId] = useState(null);
    const [selectedCountryId, setSelectedCountryId] = useState(null); // 新增用於追踪選中的國家

    // 檢查是否有任何數據可用
    if (!ServerData || !serviceData || serviceData.length === 0) {
        return (
            <div className="service_container">
                <div>資料正在加載或沒有可用的資料...</div>
            </div>
        );
    }

    const handleRegionClick = (regionId) => {
        setSelectedRegionId(regionId);
    };

    return (
        <div className="service-container">
            <div className="in-out-all">
                <h1 className="title_Service">目前服務過</h1>
                {/* 顯示國家及其地區和案例 */}
                <div className="country-container">
                    {serviceData.map(country => (
                        <div key={country.id} className="country-item">
                            <h1 className="service-heading">{country.name}</h1>
                            
                            <div className="button_container">
                                {/* 遍歷地區名稱 */}
                                {country.regions.map((region) => (
                                    <button
                                        key={region.id}
                                        className="btu_stlyes"
                                        onClick={() => {
                                            handleRegionClick(region.id);
                                            setSelectedCountryId(country.id); // 設置選中的國家
                                        }}
                                    >
                                        <div className="button_text-min">{region.name}</div>
                                    </button>
                                ))}
                            </div>
                            {/* 跳出資訊 */}
                            <div className="jump_information_in" id="element2">
                                <div className="but_text">案例</div>
                                {selectedRegionId && country.regions.map((region) => {
                                    if (region.id === selectedRegionId) {
                                        return (
                                            <div className="scroll-div" key={region.id}>
                                                <div className="boxB">
                                                    {/* 案例展示 */}
                                                    {region.cases.map((caseData) => (
                                                        <div className="cardB" key={caseData.id}>
                                                            <div className="card-body">
                                                                <div className="card-date">{caseData.contentDate}</div>
                                                                <div className="card-title">{caseData.title}</div>
                                                                <button
                                                                    className="btn-Link"
                                                                    onClick={() => window.open(caseData.pdfLink, '_blank')}
                                                                >
                                                                    打開 PDF
                                                                </button>
                                                            </div>
                                                            <img src={`${Protocol.API_URL}/cases/image/${caseData.image}`} alt={caseData.title} />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        );
                                    }
                                    return null;
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <img src={TWimg} className="TWimg" />
        </div>
    );
}
