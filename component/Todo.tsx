type Todotype = {
  userId: number;
  title: string;
  completed?: boolean;
};

export const Todo = (props: Todotype) => {
  const { title, userId, completed } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark}${title}(ユーザー:${userId})`}</p>;
};
