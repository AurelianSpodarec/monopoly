function Dice({ number }: { number: number }) {
  return (
    <div className="h-20 w-20 bg-white rounded-xl shadow-xl flex justify-between p-4 transition duration-700 hover:shadow-2xl">
      <div className="w-6 h-6 bg-gray-700 rounded-full">{number}</div>
    </div>
  )
}

export default Dice;
