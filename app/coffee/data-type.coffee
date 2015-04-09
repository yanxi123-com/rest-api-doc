class DataType
  constructor: (@type, @comment) ->

  formatComment: () ->
    return '' unless @comment

    comments = @comment.split(/;\s*/).map (str) ->
      ' <span class="label label-default">' + str + '</span>'
    comments.join('')


module.exports = (type, comment) ->
  return DataType if arguments.length == 0

  new DataType type, comment

