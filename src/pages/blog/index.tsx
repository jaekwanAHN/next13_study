interface TestPostProps {
  TestPost: string;
}

const TestPost = ({ TestPost }: TestPostProps) => {
  return (
    <div>
      TEST
      <div>{TestPost}</div>
    </div>
  );
};

export async function getStaticProps() {
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      TestPost: "나는 테스트 메시지이다",
    },
  };
}

export default TestPost;
