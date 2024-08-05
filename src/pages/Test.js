import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as C from "../styles/CommonStyle";
import * as T from "../styles/TestStyle";
import axios from "axios";

import human1 from "../img/human_1.png";
import human2 from "../img/human_2.png";
import human3 from "../img/human_3.png";
import title1 from "../img/title_1.png";
import title2 from "../img/title_2.png";
import title3 from "../img/title_3.png";

import Header from "../components/header";

function Test() {
    const mainTitle = "사상체질 자가진단";
    const subTitle = "태양인/소양인/태음인/소음인";

    const location = useLocation();
    const { type } = location.state || { type: 3 };
    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAlertOpen, setIsAlertOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const getContent = (type) => {
        switch (type) {
            case 1:
                return {
                    imageSrc: human1,
                    titleSrc: title1,
                    introText:
                        "태양인은 전체 사상체질 중 가장 수가 적어 구별하기 어렵다는 특징이 있어요",
                    info1: (
                        <>
                            용모가 뚜렷하고 살이 비후하지 않다. <br />
                            목덜미가 굵고 실하며 머리가 큰 편이다. 엉덩이가 작고
                            가슴 윗 부분이 발달했다. <br />
                            다리가 위축되어 서 있는 자세가 불안정하다. <br />
                            하체가 약해 오래 걷거나 서 있기 불편하다.
                        </>
                    ),
                    info2: (
                        <>
                            사회적 관계가 원만하고 적극적으로 남들과 소통합니다{" "}
                            <br />
                            소통이 원활하지 않으면 화를 잘 냅니다 <br />
                            조급한 경우가 많아 일을 그르치기도 합니다 <br />
                            앞으로 나아가려고 하며 용맹스럽고 적극적입니다
                            <br />
                            계획성이 적고 치밀하지 못한 편입니다
                            <br />
                        </>
                    ),
                    info3: (
                        <>
                            폐 기능이 좋고 간의 기능이 약합니다 <br />
                            소변이 잘 나와야 건강합니다
                            <br /> 변비가 오래가거나 입에서 침 또는 거품이
                            지속되면 큰 병일 수 있습니다
                            <br />
                        </>
                    ),
                    downloadImage: "../img/소음인.png",
                };
            case 2:
                return {
                    imageSrc: human2,
                    titleSrc: title2,
                    introText:
                        "소양인은 성격이 급하고 쉽게 화를 낼 수 있다는 특징이 있어요",
                    info1: (
                        <>
                            용모가 뚜렷하고 살이 비후하지 않다 <br />
                            목덜미가 굵고 실하며 머리가 큰 편이다 <br />
                            엉덩이가 작고 가슴 윗 부분이 발달했다 <br />
                            다리가 위축되어 서 있는 자세가 불안정하다 <br />
                            하체가 약해 오래 걷거나 서 있기 불편하다 <br />
                        </>
                    ),
                    info2: (
                        <>
                            사회적 관계가 원만하고 적극적으로 남들과 소통합니다{" "}
                            <br />
                            소통이 원활하지 않으면 화를 잘 냅니다 <br />
                            조급한 경우가 많아 일을 그르치기도 합니다 <br />
                            앞으로 나아가려고 하며 용맹스럽고 적극적입니다{" "}
                            <br />
                            계획성이 적고 치밀하지 못한 편입니다 <br />
                        </>
                    ),
                    info3: (
                        <>
                            폐 기능이 좋고 간의 기능이 약합니다 <br />
                            소변이 잘 나와야 건강합니다 <br />
                            변비가 오래가거나 입에서 침 또는 거품이 지속되면 큰
                            병일 수 있습니다 <br />
                        </>
                    ),
                    downloadImage: "../img/소음인.png",
                };
            case 3:
                return {
                    imageSrc: human3,
                    titleSrc: title3,
                    introText:
                        "태음인은 체구가 크고 성격이 차분하다는 특징이 있어요",
                    info1: (
                        <>
                            용모가 뚜렷하고 살이 비후하지 않다
                            <br />
                            목덜미가 굵고 실하며 머리가 큰 편이다
                            <br />
                            엉덩이가 작고 가슴 윗 부분이 발달했다
                            <br />
                            다리가 위축되어 서 있는 자세가 불안정하다
                            <br />
                            하체가 약해 오래 걷거나 서 있기 불편하다
                            <br />
                        </>
                    ),
                    info2: (
                        <>
                            사회적 관계가 원만하고 적극적으로 남들과 소통합니다
                            <br />
                            소통이 원활하지 않으면 화를 잘 냅니다
                            <br />
                            조급한 경우가 많아 일을 그르치기도 합니다
                            <br />
                            앞으로 나아가려고 하며 용맹스럽고 적극적입니다
                            <br />
                            계획성이 적고 치밀하지 못한 편입니다
                            <br />
                        </>
                    ),
                    info3: (
                        <>
                            폐 기능이 좋고 간의 기능이 약합니다
                            <br />
                            소변이 잘 나와야 건강합니다
                            <br />
                            변비가 오래가거나 입에서 침 또는 거품이 지속되면 큰
                            병일 수 있습니다
                            <br />
                        </>
                    ),
                    downloadImage: "../img/소음인.png",
                };
            default:
                return {
                    imageSrc: human1,
                    titleSrc: title1,
                    introText:
                        "태양인은 전체 사상체질 중 가장 수가 적어 구별하기 어렵다는 특징이 있어요",
                    info1: (
                        <>
                            용모가 뚜렷하고 살이 비후하지 않다. <br />
                            목덜미가 굵고 실하며 머리가 큰 편이다. 엉덩이가 작고
                            가슴 윗 부분이 발달했다. <br />
                            다리가 위축되어 서 있는 자세가 불안정하다. <br />
                            하체가 약해 오래 걷거나 서 있기 불편하다.
                        </>
                    ),
                    info2: (
                        <>
                            사회적 관계가 원만하고 적극적으로 남들과 소통합니다
                            <br />
                            소통이 원활하지 않으면 화를 잘 냅니다
                            <br />
                            조급한 경우가 많아 일을 그르치기도 합니다
                            <br />
                            앞으로 나아가려고 하며 용맹스럽고 적극적입니다
                            <br />
                            계획성이 적고 치밀하지 못한 편입니다
                            <br />
                        </>
                    ),
                    info3: (
                        <>
                            폐 기능이 좋고 간의 기능이 약합니다
                            <br />
                            소변이 잘 나와야 건강합니다
                            <br /> 변비가 오래가거나 입에서 침 또는 거품이
                            지속되면 큰 병일 수 있습니다
                            <br />
                        </>
                    ),
                    downloadImage: "../img/소음인.png",
                };
        }
    };

    const content = getContent(type);

    const handleClick = async () => {
        let surveyResultText = "";

        // type에 따라 survey_result를 설정
        switch (type) {
            case 1:
                surveyResultText = "태양인";
                break;
            case 2:
                surveyResultText = "소양인";
                break;
            case 3:
                surveyResultText = "태음인";
                break;
            case 4:
                surveyResultText = "소음인";
                break;
            default:
                surveyResultText = "Unknown";
        }

        const bodyText = {
            survey_result: surveyResultText,
        };

        try {
            const token = localStorage.getItem("token"); // 로컬 스토리지에서 토큰 가져오기

            if (!token) {
                alert("토큰이 존재하지 않습니다. 로그인 후 다시 시도해주세요.");
                return;
            }

            const response = await axios.post(
                `${process.env.REACT_APP_API}/accounts/survey/`,
                bodyText,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Token ${token}`, // 헤더에 토큰 추가
                    },
                }
            );

            console.log("Server response:", response.data);
        } catch (error) {
            console.error(
                "Error submitting survey:",
                error.response ? error.response.data : error.message
            );
            alert("An error occurred while submitting the survey.");
        }
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const copyToClipboard = () => {
        const currentUrl = window.location.href;
        navigator.clipboard.writeText(currentUrl).then(
            () => {
                setAlertMessage([
                    "링크 복사를 완료했어요.",
                    <br />,
                    "친구에게 링크를 전달해보세요.",
                ]);

                setIsAlertOpen(true);
            },
            () => {
                alert("URL 복사에 실패했습니다.");
            }
        );
    };

    // 이미지 다운로드 함수
    const saveImage = async () => {
        try {
            const response = await fetch(content.downloadImage);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = `type${type}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);

            setAlertMessage([
                "이미지가 저장되었어요.",
                <br />,
                "나의 사상체질 결과를 공유해보세요.",
            ]);
            setIsAlertOpen(true);
        } catch (error) {
            console.error("Error downloading image:", error);
            alert("Failed to download image.");
        }
    };

    return (
        <>
            <div id="capture">
                <C.Page>
                    <C.Center>
                        <T.Background>
                            <C.PageSpace>
                                <T.Test>
                                    <Header
                                        mainTitle={mainTitle}
                                        subTitle={subTitle}
                                    />
                                    <T.ImgTitle>
                                        <img
                                            src={content.imageSrc}
                                            alt="Human"
                                            style={{
                                                width: "50%",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                top: "4px",
                                            }}
                                        />
                                        <img
                                            src={content.titleSrc}
                                            alt="Title"
                                            style={{
                                                width: "60%",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}
                                        />
                                    </T.ImgTitle>
                                    <T.Detail>
                                        <div className="Detailelements">
                                            <div className="DetailIntro">
                                                {content.introText}
                                            </div>
                                            <div>
                                                <div className="Detailtitle">
                                                    <span>체형기상</span>
                                                </div>
                                                <div className="Deatilinfomation1">
                                                    <span>
                                                        {" "}
                                                        {content.info1}
                                                    </span>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="Detailtitle">
                                                    <span>성질재간</span>
                                                </div>
                                                <div className="Deatilinfomation2">
                                                    <span>{content.info2}</span>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="Detailtitle">
                                                    <span>병증약리</span>
                                                </div>
                                                <div className="Deatilinfomation3">
                                                    <span>{content.info3}</span>
                                                </div>
                                            </div>

                                            <T.ButtonContainer>
                                                <T.Button onClick={handleClick}>
                                                    나의 사상체질로 저장하기
                                                </T.Button>
                                                <T.Button onClick={toggleModal}>
                                                    결과 공유하기
                                                </T.Button>
                                            </T.ButtonContainer>
                                        </div>
                                    </T.Detail>
                                </T.Test>
                            </C.PageSpace>
                        </T.Background>
                    </C.Center>
                </C.Page>
            </div>
            {isModalOpen && (
                <div
                    style={{
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        backgroundColor: "white",
                        padding: "20px",
                        borderRadius: "10px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        zIndex: 10,
                        width: "80%",
                        maxWidth: "400px",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <button
                            onClick={toggleModal}
                            style={{
                                background: "none",
                                border: "none",
                                fontSize: "20px",
                                cursor: "pointer",
                            }}
                        >
                            ×
                        </button>
                        <h3>공유하기</h3>
                        <div></div>
                    </div>
                    <div style={{ margin: "20px 0" }}>
                        <button
                            onClick={copyToClipboard}
                            style={{
                                backgroundColor: "#63636380",
                                padding: "10px",
                                paddingLeft: "20px",
                                paddingRight: "10px",
                                borderRadius: "30px",
                                border: "none",
                                width: "100%",
                                textAlign: "center",
                                marginBottom: "10px",
                                cursor: "pointer",
                                fontSize: "16px",
                                color: "white",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            {window.location.href}
                            <button
                                style={{
                                    backgroundColor: "#6a1b3a",
                                    padding: "10px",
                                    borderRadius: "15px",
                                    border: "none",
                                    textAlign: "center",
                                    cursor: "pointer",
                                    fontSize: "10px",
                                    color: "white",
                                    width: "13%",
                                }}
                            >
                                복사
                            </button>
                        </button>
                        <button
                            style={{
                                backgroundColor: "#63636380",
                                padding: "10px",
                                paddingLeft: "20px",
                                paddingRight: "10px",
                                borderRadius: "30px",
                                border: "none",
                                width: "100%",
                                textAlign: "center",
                                fontSize: "16px",
                                color: "white",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            이미지로 저장하기
                            <button
                                onClick={saveImage}
                                style={{
                                    backgroundColor: "#6a1b3a",
                                    padding: "10px",
                                    borderRadius: "15px",
                                    border: "none",
                                    textAlign: "center",
                                    cursor: "pointer",
                                    fontSize: "10px",
                                    color: "white",
                                    width: "13%",
                                }}
                            >
                                저장
                            </button>
                        </button>
                    </div>
                </div>
            )}
            {isModalOpen && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        zIndex: 9,
                    }}
                    onClick={toggleModal}
                ></div>
            )}

            {isAlertOpen && (
                <div
                    style={{
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        backgroundColor: "#000000",
                        padding: "30px",
                        paddingTop: "50px",
                        borderRadius: "20px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        zIndex: 10,
                        width: "80%",
                        maxWidth: "300px",
                        textAlign: "center",
                        color: "white",
                    }}
                >
                    <p>{alertMessage}</p>
                    <button
                        onClick={() => setIsAlertOpen(false)}
                        style={{
                            background: "#000000",
                            border: "none",
                            padding: "10px",
                            borderRadius: "5px",
                            cursor: "pointer",
                            width: "100%",
                            marginTop: "40px",
                            color: "#F5F5F5",
                        }}
                    >
                        확인
                    </button>
                </div>
            )}

            {(isModalOpen || isAlertOpen) && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        zIndex: 9,
                    }}
                    onClick={() => {
                        setIsModalOpen(false);
                        setIsAlertOpen(false);
                    }}
                ></div>
            )}
        </>
    );
}

export default Test;
