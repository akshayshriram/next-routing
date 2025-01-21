export default function ReviewDetails({ params }) {
  return (
    <h1>
      Review for {params.productId} - {params.reviewId}
    </h1>
  );
}
