function joinObj(A, B) {
  const joinedObj = A.reduce((acc, cur) => {
    let newObj = {};
    B.forEach((el) => {
      if (el.id === cur.id) {
        newObj.id = el.id;
        newObj.status = cur.status;
        newObj.value = el.value;
      }
    });
    acc.push(newObj);
    return acc;
  }, []);
  return joinedObj;
}

const C = joinObj(
  [
    { id: 10, status: true },
    { id: 20, status: false },
    { id: 30, status: true },
  ],
  [
    { id: 10, value: "100" },
    { id: 20, value: "200" },
    { id: 30, value: "300" },
  ]
);

console.log(C);
