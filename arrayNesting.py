class Solution(object):
    def arrayNesting(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        max = 0
        for i in range(len(nums)):
            set = self.findSet(nums, i)
            length = len(set)
            if(length > max):
                max = length
        return max

    def findSet(self, nums, i):
        hash = {}
        set = []
        x = i
        while(not x in hash):
            set.append(nums[x])
            hash[x] = True
            x = nums[x]
        return set

nums = [5,4,0,3,1,6,2]
s = Solution()
print(s.arrayNesting(nums))