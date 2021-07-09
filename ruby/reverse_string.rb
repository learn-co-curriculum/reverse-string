def reverse_string(str)
  counter = 0
  while counter < str.length/2 do
    temp = str[counter]
    back_ind = str.length - 1 - counter
    str[counter] = str[back_ind]
    str[back_ind] = temp
    counter += 1
  end
  return str
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'ih'"
  puts "=>", reverse_string('hi')

  puts

  puts "Expecting: 'ybabtac'"
  puts "=>", reverse_string('catbaby')
  
  puts "Expecting: ''"
  puts "=>", reverse_string('')
end

# Please add your pseudocode to this file
# And a written explanation of your solution