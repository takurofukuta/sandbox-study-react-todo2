import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="入力してください"></input>
        <button>追加</button>
      </div>
      <div className="incompleted-task-area">
        <p className="title">未完了のタスク</p>
        <ul>
          <div className="list-row">
            <li>あああああああああ</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div className="list-row">
            <li>いいいいいいいい</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div className="completed-task-area">
        <p className="title">完了したタスク</p>
        <ul>
          <div className="list-row">
            <li>ううううう</li>
            <button>戻す</button>
          </div>
          <div className="list-row">
            <li>えええええええ</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
