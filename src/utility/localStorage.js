const getStoredCard = () => {
  const storedCard = localStorage.getItem("card");
  if (storedCard) {
    return JSON.parse(storedCard);
  }
  return [];
};

const savedToLocalStorage = (id) => {
  const storedCard = getStoredCard();
  const exists = storedCard.find((singleCard) => singleCard === id);
  if (!exists) {
    storedCard.push(id);
    const storedCardStrified = JSON.stringify(storedCard);
    localStorage.setItem("card", storedCardStrified);
  }
};

export { savedToLocalStorage, getStoredCard };
