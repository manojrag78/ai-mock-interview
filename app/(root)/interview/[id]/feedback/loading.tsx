// app/posts/loading.tsx
function Loading({ size = 'md', color = 'primary' }: { size?: 'sm' | 'md' | 'lg'; color?: 'primary' | 'white' }){
    const sizeClasses = {
      sm: 'h-4 w-4',
      md: 'h-8 w-8',
      lg: 'h-12 w-12'
    };
  
    const colorClasses = {
      primary: 'text-blue-500',
      white: 'text-white'
    };
  
    return (
      <div className="flex items-center justify-center" role="status">
        <div
          className={`${sizeClasses[size]} ${colorClasses[color]} animate-spin inline-block`}
          style={{
            background: 'radial-gradient(farthest-side,currentColor 94%,#0000) top/9px 9px no-repeat, conic-gradient(#0000 30%,currentColor)',
            mask: 'radial-gradient(farthest-side,#0000 calc(100% - 9px),#000 0)'
          }}
        ></div>
        <span className="sr-only">Loading...</span>
      </div>
    );
  };

  export default Loading