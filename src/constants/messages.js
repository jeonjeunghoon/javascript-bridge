const MESSAGE_SYSTEM = Object.freeze({
  START_GAME: '다리 건너기 게임을 시작합니다.\n',
});

const MESSAGE_QUERY = Object.freeze({
  BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  MOVING: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  GAME_COMMAND:
    '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
});

const MESSAGE_ERROR = Object.freeze({
  VALUE: '[ERROR] 잘못된 값의 입력입니다.',
});

module.exports = {
  MESSAGE_SYSTEM,
  MESSAGE_QUERY,
  MESSAGE_ERROR,
};
