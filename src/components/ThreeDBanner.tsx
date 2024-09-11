import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import pcc from '../assets/img/pcc-badge.png'

const ThreeDBanner = () => {
    return (
        <CardContainer>
            <CardBody className="bg-transparent relative group/card w-auto sm:w-[30rem] h-auto rounded-xl p-6">
                <CardItem
                    translateZ="100"
                    rotateX={20}
                    rotateZ={-1}
                    className="w-full mt-4"
                >
                    <img
                        src={pcc}
                        className="w-full object-covergroup-hover/card:shadow-xl cyber-box z-20 bg-transparent"
                        alt="thumbnail"
                    />
                </CardItem>
            </CardBody>
        </CardContainer>
    )
}

export default ThreeDBanner