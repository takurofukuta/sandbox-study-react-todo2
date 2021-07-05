import "./styles.css";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="入力してください"></input>
        <button>追加</button>
      </div>
      <div>
        <p>未完了のタスク</p>
        <ul>
          <div>
            <li>あああああああああ</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div>
            <li>いいいいいいいい</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div>
        <p>完了したタスク</p>
        <ul>
          <div>
            <li>ううううう</li>
            <button>戻す</button>
          </div>
          <div>
            <li>えええええええ</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
