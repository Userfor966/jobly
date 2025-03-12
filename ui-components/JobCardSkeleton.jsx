export default function JobSkeleton() {
    return (
      <div className="relative flex flex-col gap-[10px] w-full p-[10px] h-auto rounded-[2px] bg-[#1B1F23] animate-pulse">
        {/* Başlık Skeleton */}
        <div className="w-3/4 h-[20px] bg-gray-700 rounded"></div>
  
        {/* Şehir Skeleton */}
        <div className="w-1/2 h-[15px] bg-gray-600 rounded"></div>
  
        {/* Maaş Skeleton */}
        <div className="w-[90px] h-[30px] bg-gray-700 rounded"></div>
  
        {/* Görüntülenme Skeleton */}
        <div className="flex items-center gap-[10px] absolute bottom-2 right-2">
          <div className="w-[20px] h-[20px] bg-gray-600 rounded-full"></div>
          <div className="w-[30px] h-[15px] bg-gray-600 rounded"></div>
        </div>
      </div>
    );
  }
  