import React from 'react';
import classNames from 'classnames';
import { Todo } from '../../types/Todo';

interface Props {
  todos: Todo[],
  isTodoInfoRequested: boolean,
  onTodoInfoRequest: (arg: boolean) => void,
  onUserIdChange: (arg: number) => void,
  onSelectedTodoChange: (arg: Todo) => void;
}

export const TodoList: React.FC<Props> = ({
  todos,
  isTodoInfoRequested,
  onTodoInfoRequest,
  onUserIdChange,
  onSelectedTodoChange,
}) => {
  return (
    <table className="table is-narrow is-fullwidth">
      {todos.length > 0 && (
        <thead>
          <tr>
            <th>#</th>
            <th>
              <span className="icon">
                <i className="fas fa-check" />
              </span>
            </th>
            <th>Title</th>
            <th> </th>
          </tr>
        </thead>
      )}

      <tbody>
        {todos.map(todo => {
          const {
            id,
            title,
            completed,
            userId,
          } = todo;

          const handleSelectedTodo = () => {
            onTodoInfoRequest(true);
            onUserIdChange(userId);
            onSelectedTodoChange(todo);
          };

          return (
            <tr data-cy="todo" className="" key={id}>
              <td className="is-vcentered">{id}</td>
              <td className="is-vcentered">
                {completed && (
                  <span className="icon" data-cy="iconCompleted">
                    <i className="fas fa-check" />
                  </span>
                )}
              </td>
              <td className="is-vcentered is-expanded">
                <p className={classNames({
                  'has-text-danger': !completed,
                  'has-text-success': completed,
                })}
                >
                  {title}
                </p>
              </td>
              <td className="has-text-right is-vcentered">
                <button
                  data-cy="selectButton"
                  className="button"
                  type="button"
                  onClick={handleSelectedTodo}
                >
                  <span className="icon">
                    {isTodoInfoRequested
                      ? <i className="far fa-eye-slash" />
                      : <i className="far fa-eye" />}
                  </span>
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
