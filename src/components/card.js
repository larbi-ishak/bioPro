import Link from "next/link";

const Card = ({ title, blog_data: { date, city } }) => {
    return (
        <>
            <h2>{title} Blog</h2>
            <div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Vero adipisci, quas porro excepturi inventore officia? Sed
                    placeat natus, exercitationem quidem odio dignissimos.
                </p>
                <b>
                    Date: {date} in: {city.toUpperCase()}
                </b>
                <br />
                <br />
                <Link
                    href={`/blogpost/${title}`}
                    style={{
                        border: "1px solid #fff",
                        padding: "8px",
                        borderRadius: "8px",
                    }}
                >
                    Read More
                </Link>
            </div>
        </>
    );
};

export default Card;
