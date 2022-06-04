import reviews from "./data";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Review = (props) => {
    return (
        <article>
            <div className="review-box">
                <img src={reviews[props.page].image} alt={reviews[props.page].name} />
                <h3>{reviews[props.page].name}</h3>
                <h4>{reviews[props.page].job}</h4>
                <p>{reviews[props.page].text}</p>
                <div>
                    <BiChevronLeft
                        className="icons"
                        onClick={() => {
                            props.page - 1 < 0 ? props.changePage(0) : props.changePage(props.page - 1);
                        }}
                    />
                    <BiChevronRight
                        className="icons"
                        onClick={() => {
                            props.page + 1 >= reviews.length ? props.changePage(reviews.length - 1) : props.changePage(props.page + 1);
                        }}
                    />
                </div>
                <button
                    className="btn"
                    onClick={() => {
                        console.log("Button Clicked");
                    }}
                >
                    Surprise Me
                </button>
            </div>
        </article>
    );
};

export default Review;
