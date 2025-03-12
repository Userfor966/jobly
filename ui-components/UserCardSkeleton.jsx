export default function UserSkeleton() {
    return (
      <div className="flex justify-start gap-[10px] w-1/1 p-[10px] h-auto rounded-[5px] bg-[#1B1F23] animate-pulse">
        {/* Profil Resmi Skeleton */}
        <div className="w-[120px] flex items-center justify-start">
          <div className="w-[80px] h-[80px] rounded-full bg-gray-700"></div>
        </div>
  
        {/* Kullanıcı Bilgileri Skeleton */}
        <div className="w-full flex flex-col gap-[10px] items-start">
          <div className="w-3/4 h-[20px] bg-gray-700 rounded"></div>
          <div className="w-2/4 h-[15px] bg-gray-600 rounded"></div>
          <div className="w-1/4 h-[15px] bg-gray-600 rounded"></div>
        </div>
      </div>
    );
  }
  