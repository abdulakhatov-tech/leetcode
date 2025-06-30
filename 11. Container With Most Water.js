const maxArea = (height) => {
    let max = 0;
    let left = 0;
    let right = height.length - 1;

    while(left < right) {
        const h = Math.min(height[left], height[right]);
        const w = right - left;
        max = Math.max(max, h * w);

        if(height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return max;
}