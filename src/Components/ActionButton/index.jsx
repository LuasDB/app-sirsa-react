import React from "react";

const ActionButton = ({ icon: Icon, label, color, onClick,loading }) => (
    <button 
      type="button"
      onClick={onClick}
      disabled={loading}
      className={`${color} h-20 flex items-center justify-center gap-2 p-4 rounded-lg w-full min-w-[200px] md:w-auto transition-all duration-300 hover:opacity-90 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      <Icon className="text-xl" />
      <span>{label}</span>
    </button>
  );

  export default React.memo(ActionButton)