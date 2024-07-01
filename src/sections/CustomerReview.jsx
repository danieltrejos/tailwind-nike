import { reviews } from '../constants'
import ReviewCard from './../components/ReviewCard';


const CustomerReview = () => {
  return (
    <section className="max-container">
      <h3 className="font-palaquin text-centertext text-4xl font-bold">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">Hear genuine stories from our satisfied costumers aboout theri exceptional experiens with us.</p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard
            key={review.costumer}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}

          />
        ))}
      </div>

    </section>
  )
};

export default CustomerReview;
