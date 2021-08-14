class Solution(object):
    def twoSum(self, nums, target):
        hash = {}
        index = 0
        for num in nums:
            if num in hash.keys():
                return [hash[num], index]
            hash[target - num] = index
            index += 1


    def threeSum(self, nums, target):
        index = 0
        for num in nums:
            twoSum = self.twoSum(nums, target - num)
            if twoSum:
                return [index, twoSum[0], twoSum[1]]
            index += 1


s = Solution()
nums = [2, 7, 11, 15, 3]
target = 9
print(s.twoSum(nums, target))
print(s.twoSum([3, 2, 4], 6))
print(s.twoSum([3, 3], 6))
print(s.twoSum([3, 4], 6))
print(s.threeSum(nums, 16))
