const state = {
  color: {
    26: 'linear-gradient(90deg, #32DCFF 0%, #47D6FF 47%, #4ED4FF 100%)',
    27: 'linear-gradient(90deg, #3FD8FF 0%, #54D2FF 50%, #5AD1FF 100%)',
    28: 'linear-gradient(90deg, #4CD5FF 0%, #60CEFF 58%, #66CDFF 100%)',
    29: 'linear-gradient(90deg, #57D1FF 0%, #6DCBFF 50%, #71C9FF 100%)',
    30: 'linear-gradient(90deg, #61CEFF 0%, #79C7FF 46%, #7DC6FF 100%)',
    31: 'linear-gradient(90deg, #70CAFF 0%, #7DC2FF 50%, #7EC2FF 100%)',
    32: 'linear-gradient(90deg, #7AC6FF 0%, #7DBDFF 50%, #7DBDFF 100%)',
    33: 'linear-gradient(90deg, #7DC1FF 0%, #7DBAFF 50%, #7DB9FF 100%)',
    34: 'linear-gradient(90deg, #7EBEFF 0%, #7DB5FF 49%, #7DB5FF 100%)',
    35: 'linear-gradient(90deg, #7EBAFF 0%, #7EB0FF 49%, #7DB0FF 100%)',
    36: 'linear-gradient(90deg, #85BAFA 0%, #7DACFF 48%, #7DADFF 100%)',
    37: 'linear-gradient(90deg, #7EB2FF 0%, #7DA5FF 51%, #7DA8FF 100%)',
    38: 'linear-gradient(90deg, #7EACFF 0%, #7EA2FF 48%, #7DA4FF 100%)',
    39: 'linear-gradient(90deg, #7EAAFF 0%, #7D9FFF 48%, #7DA0FF 100%)',
    40: 'linear-gradient(90deg, #7EA5FF 0%, #7D9AFF 44%, #7D9DFF 100%)',
    41: 'linear-gradient(90deg, #7DA0FF 0%, #8098FB 43%, #7E99FE 100%)',
    42: 'linear-gradient(90deg, #7D9BFF 0%, #8298F9 42%, #8099FC 100%)',
    43: 'linear-gradient(90deg, #7E99FE 0%, #8496F5 46%, #8198FA 100%)',
    44: 'linear-gradient(90deg, #8298F9 0%, #8695F3 47%, #8497F7 100%)',
    45: 'linear-gradient(90deg, #8197F9 0%, #8895F1 43%, #8596F5 100%)',
    46: 'linear-gradient(90deg, #8397F7 0%, #8B93EE 49%, #8795F3 100%)',
    47: 'linear-gradient(90deg, #8696F4 0%, #8D91EA 46%, #8794F1 100%)',
    48: 'linear-gradient(90deg, #8795F2 0%, #8F91E8 41%, #8A93EE 100%)',
    49: 'linear-gradient(90deg, #8994EF 0%, #9190E6 44%, #8C93EC 100%)',
    50: 'linear-gradient(90deg, #8C92EC 0%, #938FE3 45%, #8D91EA 100%)',
    51: 'linear-gradient(90deg, #8D92EA 0%, #958EE0 48%, #8F91E9 100%)',
    52: 'linear-gradient(90deg, #8F91E8 0%, #978CDC 48%, #9090E6 100%)',
    53: 'linear-gradient(90deg, #9190E6 0%, #9A8BDA 39%, #918FE4 100%)',
    54: 'linear-gradient(90deg, #928FE4 0%, #9B8AD8 44%, #938EE2 100%)',
    55: 'linear-gradient(90deg, #958EE1 0%, #9E89D4 41%, #948EE1 100%)',
    56: 'linear-gradient(90deg, #968CDE 0%, #A088D2 41%, #968EE0 100%)',
    57: 'linear-gradient(90deg, #988CDC 0%, #A286CE 47%, #978DDE 100%)',
    58: 'linear-gradient(90deg, #9A8BD9 0%, #A586CC 41%, #988CDC 100%)',
    59: 'linear-gradient(90deg, #9B8AD7 0%, #A685CA 45%, #9A8BDA 100%)',
    60: 'linear-gradient(90deg, #9D89D5 0%, #A983C6 41%, #9A8AD8 100%)',
    61: 'linear-gradient(90deg, #9F88D3 0%, #AB81C3 45%, #9C8AD8 100%)',
    62: 'linear-gradient(90deg, #A087D1 0%, #AD81C1 41%, #9D89D5 100%)',
    63: 'linear-gradient(90deg, #A486CE 0%, #AF80BE 44%, #9E88D4 100%)',
    64: 'linear-gradient(90deg, #A585CB 0%, #B27FBB 43%, #9F88D3 100%)',
    65: 'linear-gradient(90deg, #A684C9 0%, #B67CB6 43%, #A088D2 100%)',
    66: 'linear-gradient(90deg, #A783C7 0%, #B57CB5 41%, #A187D0 100%)',
    67: 'linear-gradient(90deg, #AA83C5 0%, #B87BB3 43%, #A186CF 100%)',
    68: 'linear-gradient(90deg, #AA81C3 0%, #B97AB0 35%, #A286CF 100%)',
    69: 'linear-gradient(90deg, #AD81C1 0%, #BC79AD 42%, #A286CF 100%)',
    70: 'linear-gradient(90deg, #AF80BF 0%, #BD78AB 41%, #A386CE 100%)',
    71: 'linear-gradient(90deg, #B07FBD 0%, #C077A8 40%, #A385CC 100%)',
    72: 'linear-gradient(90deg, #B07FBC 0%, #C375A5 40%, #A486CD 100%)',
    73: 'linear-gradient(90deg, #B37DB8 0%, #C575A3 43%, #A485CC 100%)',
    74: 'linear-gradient(90deg, #B47DB7 0%, #C774A0 42%, #A586CC 100%)',
    75: 'linear-gradient(90deg, #B77CB5 0%, #C7739F 40%, #A584CA 100%)',
    76: 'linear-gradient(90deg, #B67CB4 0%, #CB729A 34%, #A585CB 100%)',
    77: 'linear-gradient(90deg, #B87BB1 0%, #CD7097 40%, #A585CB 100%)',
    78: 'linear-gradient(90deg, #BA7AB0 0%, #CF6F94 40%, #A585CA 100%)',
    79: 'linear-gradient(90deg, #BB79AD 0%, #D26E92 39%, #A685CA 100%)',
    80: 'linear-gradient(90deg, #BC79AD 0%, #D36C8E 39%, #A585CB 100%)',
    81: 'linear-gradient(90deg, #BE78AB 0%, #D66C8C 35%, #A585CB 100%)',
    82: 'linear-gradient(90deg, #BE78AA 0%, #D86B89 36%, #A685CA 100%)',
    83: 'linear-gradient(90deg, #C176A7 0%, #D96A88 39%, #A485CC 100%)',
    84: 'linear-gradient(90deg, #BF77A9 0%, #DC6884 34%, #A485CC 100%)',
    85: 'linear-gradient(90deg, #C176A6 0%, #DE6780 34%, #A485CC 100%)',
    86: 'linear-gradient(90deg, #C6739F 0%, #E0667F 33%, #A485CB 100%)',
    87: 'linear-gradient(90deg, #C376A5 0%, #E2657B 32%, #A286CE 100%)',
    88: 'linear-gradient(90deg, #C474A2 0%, #E56479 31%, #A187D0 100%)',
    89: 'linear-gradient(90deg, #C574A2 0%, #E76376 33%, #A087D1 100%)',
    90: 'linear-gradient(90deg, #C674A1 0%, #E86274 31%, #9F87D1 100%)',
    91: 'linear-gradient(90deg, #C575A2 0%, #EA6071 27%, #9F88D3 100%)',
    92: 'linear-gradient(90deg, #C674A0 0%, #ED5E6C 27%, #9E89D4 100%)',
    93: 'linear-gradient(90deg, #C8729D 0%, #EF5E6A 30%, #9E88D3 100%)',
    94: 'linear-gradient(90deg, #C8739D 0%, #F15C66 30%, #9D8AD6 100%)',
    95: 'linear-gradient(90deg, #CA7199 0%, #F05D68 30%, #9C8AD8 92%)',
    96: 'linear-gradient(90deg, #C8729C 0%, #F45C64 31%, #7D9AFF 100%)',
    97: 'linear-gradient(90deg, #BF6D9E 0%, #F65A61 27%, #7D9AFF 100%)',
    98: 'linear-gradient(90deg, #BD6FA3 1%, #FA595D 30%, #9090E7 100%)',
    99: 'linear-gradient(90deg, #B377B2 0%, #FB575A 32%, #9090E7 100%)',
    100: 'linear-gradient(90deg, #9190E6 0%, #F8595F 40%, #9191E7 100%)'
  }
}

const getters = {
  getColor: state => state.color
}

export default {
  state,
  getters
}
